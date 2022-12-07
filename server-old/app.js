const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");
const multer = require("multer");
const upload = multer({ dest: path.join(__dirname, "uploads") });

const app = express();

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(path.resolve(__dirname)));
app.use(express.static(path.resolve(__dirname, "../client/build")));

const localPath = path.join(__dirname);

app.use("/get-file/*", (req, res, next) => {
  res.download(path.join(localPath, req.params["0"]));
});

app.post("/api", jsonParser, async (req, res, next) => {
  const p = req.body.path;

  fs.readdir(path.join(localPath, p), async (err, content) => {
    if (err) {
      return console.log(err, "error at readdir");
    }
    const files = [];
    content = content.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));

    for (let file of content) {
      const some = await new Promise((resolve, reject) => {
        fs.stat(path.join(localPath, p, file), (err, stats) => {
          if (err) {
            return console.log(err);
          }
          const obj = {
            size: stats.size,
            isDir: stats.isDirectory(),
            ext: path.extname(file),
            title: file,
            path: path.join(req.body.path, file),
            mtime: stats.mtimeMs,
            fullPath: path.join(localPath, req.body.path, file),
          };
          return resolve(obj);
        });
      });
      files.push(some);
    }
    return res.json(JSON.stringify(files));
  });
});

app.post("/upload-file", upload.single("file"), (req, res) => {
  const file = req.file;
  const p = req.body.path;
  fs.copyFile(file.path, path.join(localPath, p, file.originalname), (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ err: err });
    }
    res.status(200).json({ isComplete: true });
  });
});

app.post("/delete-file", jsonParser, (req, res, next) => {
  const p = req.body.path;
  const isDir = req.body.isDir;
  if (!isDir) {
    return fs.unlink(path.join(localPath, p), (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ err: err });
      }

      return res.status(200).json({ message: "success" });
    });
  }
  fs.rm(path.join(localPath, p), { recursive: true, force: true }, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: err });
    }
    return res.status(200).json({ message: "success" });
  });
});

app.post("/move-file", jsonParser, (req, res, next) => {
  const from = req.body.oldPath;
  const to = req.body.newPath;

  const fileName = from.slice(from.lastIndexOf("\\") + 1);

  fs.rename(from, path.join(to, fileName), (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: err });
    }
    return res.status(200).json({ message: "success" });
  });
});

app.post("/copy-file", jsonParser, async (req, res, next) => {
  function copyFolderSync(from, to) {
    fs.mkdirSync(to);
    return fs.readdirSync(from).forEach((element) => {
      if (fs.lstatSync(path.join(from, element)).isFile()) {
        fs.copyFileSync(path.join(from, element), path.join(to, element));
      } else {
        copyFolderSync(path.join(from, element), path.join(to, element));
      }
    });
  }

  const from = req.body.oldPath;
  const fileName = from.slice(from.lastIndexOf("\\") + 1);
  const to = path.join(req.body.newPath, fileName);

  const parent = to.slice(0, to.lastIndexOf("\\"));
  if (parent === from) {
    return res.status(400).json({
      err: new Error(
        "Конечная папка, в которую следует поместить файлы, является дочерней для папки, в которой они находятся."
      ),
    });
  }

  if (fs.statSync(from).isFile()) {
    return fs.copyFile(from, to, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ err: err });
      }
      res.status(200).json({ message: "success" });
    });
  }

  new Promise((resolve, reject) => {
    return resolve(copyFolderSync(from, to));
  }).then(() => {
    res.status(200).json({ message: "success" });
  });
});

app.post("/rename-file", jsonParser, (req, res, next) => {
  const oldPath = path.join(localPath, req.body.oldPath);
  const newTitle = req.body.newTitle;
  const index =
    oldPath[oldPath.length - 1] === "\\"
      ? oldPath.slice(0, -1).lastIndexOf("\\")
      : oldPath.lastIndexOf("\\");
  const newPath = path.join(oldPath.slice(0, index + 1), newTitle);

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: err });
    }
    return res.status(200).json({ message: "success" });
  });
});

server.listen(PORT);
