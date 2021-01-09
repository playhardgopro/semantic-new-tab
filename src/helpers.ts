
export const getAll = <T>(type: T, array: any[]) => {
	return array.filter((node) => (node.type === type))
}
