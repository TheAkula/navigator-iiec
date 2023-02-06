import styled, { useTheme } from 'styled-components'

import { Loader } from '../loader'
import { useFileViewerContext } from '../../context/file-viewer-context'

// TODO: maybe add popup to see progress in percent
export const StatusHeader = () => {
	const {
		downloadProgress,
		uploadProgress,
		showDownloadProgress,
		showUploadProgress,
	} = useFileViewerContext()

	const { colors } = useTheme()

	return (
		<Wrapper>
			{showDownloadProgress && <Loader progress={downloadProgress} radius={20} innerBackground={colors.grey} outerBackground={colors.blue[0]} />	}
		{showUploadProgress && <Loader progress={uploadProgress} radius={20} innerBackground={colors.grey} outerBackground={colors.blue[0]} />	}
			</Wrapper>
	)
}

const Wrapper = styled.div`
gap: 20px;
padding: 10px;
height: 30px;
display: flex;
justify-content: flex-end;
alight-items: center;
`
