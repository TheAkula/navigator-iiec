import styled from 'styled-components'

interface Props {
	progress: number
	radius: number
	outerBackground: string
	innerBackground: string
}

export const Loader = ({ progress, radius, ...rest }: Props) => {
	const d_angle = 360 * progress
	const r_angle = d_angle * Math.PI / 180

	const s = Math.sin(r_angle)
  const c = Math.cos(r_angle)
	
	const xnew = c * 0 - s * -(radius / 2)
  const ynew = s * 0 + c * -(radius / 2)

	const stringPosition = Math.round((xnew + radius / 2) / radius * 100) + '% ' + Math.round((ynew + radius / 2) / radius * 100) + '%'
	
	return <StyledLoader {...rest} radius={radius} angle={d_angle} pos={stringPosition} />
}

export interface LoaderProps {
	angle: number
	pos: string
	radius: number
	outerBackground: string
	innerBackground: string
}

export const StyledLoader = styled.div<LoaderProps>`
width: ${({ radius }) => radius}px;
height: ${({ radius }) => radius}px;
border-radius: 50%;
position: relative;
overflow: hidden;
background: ${({ outerBackground }) => outerBackground};
}
::before {
content: "";
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: ${({ radius }) => radius * 1.5}px;
height: ${({ radius }) => radius * 1.5}px;
box-sizing: border-box;
position: absolute;
border: ${({ radius }) => radius * 1.5 / 2}px solid ${({ innerBackground }) => innerBackground};
clip-path: polygon(50% 50%, 50% 0, ${({ pos, angle }) => angle < 45 ? pos : '100% 0'}, ${({ angle, pos }) => angle < 135 ? pos : '100% 100%'}, ${({ angle, pos }) => angle < 225 ? pos : '0 100%'}, ${({ pos, angle }) => angle < 315 ? pos : '0 0'}, ${({ pos }) => pos});
}

@keyframes prixClipFix {
0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}
`
