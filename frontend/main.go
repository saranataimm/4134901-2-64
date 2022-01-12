package main

import (
	"min/lab8/configs"
	"min/lab8/routers"

	"github.com/gin-gonic/gin"
)

func main() {
	configs.Connection()

	r := gin.Default()

	routers.RouterIndex(r)
	routers.RouterUser(r)

	r.Run(":8000")
}