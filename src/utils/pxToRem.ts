export default function pxToRem(px: number, baseSize = 16): string {
	return `${px / baseSize}rem`;
}
