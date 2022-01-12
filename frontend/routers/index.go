package routers

import (
	"min/lab8/controllers"

	"github.com/gin-gonic/gin"
)

func RouterIndex(r *gin.Engine)  {
	r.GET("/",controllers.Index)
}

