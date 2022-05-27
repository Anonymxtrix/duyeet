package utils

type ByteSize uint32

const (
	B ByteSize = 1 << (10 * iota)
	KB
	MB
	GB
)
