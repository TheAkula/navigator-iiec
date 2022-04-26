import Menu from "./menu";
import MenuItem from "./menu/menuItem";
import { StyledMain } from "./styled";
import Archive from "../../assets/images/archive.svg";
import College from "../../assets/images/college.svg";
import Documents from "../../assets/images/documents.svg";
import Event from "../../assets/images/event.svg";
import Gateway from "../../assets/images/gateway-locked.svg";
import Konsultant from "../../assets/images/konsultant-plus.svg";
import Label from "../../assets/images/label.svg";
import Library from "../../assets/images/library.svg";
import MetObr from "../../assets/images/metod-obr.svg";
import Web from "../../assets/images/optimize-web.svg";
import Photo from "../../assets/images/photo.svg";
import Quality from "../../assets/images/quality.svg";
import Server from "../../assets/images/server-maintenance-data-back-up.svg";
import Support from "../../assets/images/support.svg";
import Timetable from "../../assets/images/timetable.svg";
import Video from "../../assets/images/video.svg";
import Weather from "../../assets/images/weather.svg";
import Wikipedia from "../../assets/images/wikipedia.svg";
import Work from "../../assets/images/work.svg";
import Yandex from "../../assets/images/Yandex_znak.svg";
import { useEffect, useState, useCallback } from "react";
import MainMenu from "./mainMenu";
import axios from "axios";
import { useLocation } from "react-router";

export interface FileType {
  ext: string;
  isDir: boolean;
  size: number;
  title: string;
  path: string;
  mtime: number;
  fullPath: string;
}

export interface SelectedFile {
  path: string;
  isDir: boolean;
}

const Main = () => {
  const [path, setPath] = useState<null | string>(null);
  const [prevPath, setPrevPath] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<FileType[] | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
  const location = useLocation();
  const { pathname } = location;

  const update = useCallback(() => {
    setLoading(true);
    axios
      .post("/api", { path: path })
      .then((data) => {
        setLoading(false);
        setFiles(JSON.parse(data.data));
        setSelectedFiles([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [path, setLoading]);

  useEffect(() => {
    // if (prevPath !== path && path) {
    setLoading(false);
    if (path) {
      update();
    }
    // }
  }, [update, path]);

  useEffect(() => {
    document.documentElement.style.cursor = loading ? "wait" : "auto";
  }, [loading]);

  const onChangePath = (p: string) => {
    const getPrevPath = (prevP: string) => {
      for (let i = prevP.length - 2; i >= 0; i--) {
        if (prevP[i] === "/" || prevP[i] === "\\") {
          return prevP.slice(0, i) || "/";
        }
      }
      return prevP;
    };

    setPath(p);
    const prevP = getPrevPath(p!);
    setPrevPath(prevP);
  };

  return (
    <StyledMain>
      <Menu title="МЕНЮ">
        <MenuItem path="/metod-obr" imgUrl={MetObr}>
          Методическое образование
        </MenuItem>
        <MenuItem path="/timetable" imgUrl={Timetable}>
          Расписание
        </MenuItem>
        <MenuItem path="/quality" imgUrl={Quality}>
          Менеджмент качества
        </MenuItem>
        <MenuItem path="/library" imgUrl={Library}>
          Электронная библиотека
        </MenuItem>
        <MenuItem path="/archive" imgUrl={Archive}>
          Файловый архив
        </MenuItem>
        <MenuItem path="/event" imgUrl={Event}>
          События
        </MenuItem>
        <MenuItem path="http://www.consultant.ru/" imgUrl={Konsultant}>
          Консультант Плюс
        </MenuItem>
        <MenuItem path="https://translate.yandex.ru/" imgUrl={Yandex}>
          Яндекс Переводчик
        </MenuItem>
        <MenuItem path="https://yandex.ru/pogoda" imgUrl={Weather}>
          Погода в Ижевске
        </MenuItem>
        <MenuItem path="https://ciur.ru/ipek" imgUrl={Web}>
          Официальный сайт колледжа
        </MenuItem>
      </Menu>
      <MainMenu
        path={path}
        prevPath={prevPath}
        isFileViewer={
          !!location.state &&
          !!(location.state as { showFileViewer?: boolean }).showFileViewer
        }
        changeSelectedFiles={setSelectedFiles}
        files={files}
        selectedFiles={selectedFiles}
        update={update}
        onChangePath={onChangePath}
        setLoading={(l: boolean) => setLoading(l)}
        loading={loading}
      />
      <Menu title="ДОПОЛНИТЕЛЬНО">
        <MenuItem
          to={pathname || "/"}
          path="/"
          imgUrl={Documents}
          changePath={onChangePath}
          state={{ showFileViewer: true }}
          isLink={true}
        >
          Документы преподавателей
        </MenuItem>
        <MenuItem path="/labels" imgUrl={Label}>
          Ярлыки
        </MenuItem>
        <MenuItem path="/photos" imgUrl={Photo}>
          Фото
        </MenuItem>
        <MenuItem path="/videos" imgUrl={Video}>
          Видео
        </MenuItem>
        <MenuItem path="https://ru.wikipedia.org/" imgUrl={Wikipedia}>
          Википедия
        </MenuItem>
        <MenuItem path="/gateway" imgUrl={Gateway}>
          Шлюз
        </MenuItem>
        <MenuItem path="/support" imgUrl={Support}>
          Помощь
        </MenuItem>
        <MenuItem path="/college" imgUrl={College}>
          Электронный колледж и<br /> портал СПО
        </MenuItem>
        <MenuItem path="/resources" imgUrl={Work}>
          Образовательные ресурсы
        </MenuItem>
        <MenuItem path="/systems" imgUrl={Server}>
          Гос. информационные системы
        </MenuItem>
      </Menu>
    </StyledMain>
  );
};

export default Main;
