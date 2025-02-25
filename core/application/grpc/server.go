package grpc

import (
	"fmt"
	"log"
	"net"

	"github.com/LucasGitDev/codepix/application/grpc/pb"
	"github.com/LucasGitDev/codepix/application/usecase"
	"github.com/LucasGitDev/codepix/infraestructure/repository"
	"github.com/jinzhu/gorm"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func StartGrpcServer(database *gorm.DB, port int) {
	grpcServer := grpc.NewServer()

	pixRepository := repository.PixKeyRepositoryDb{Db: database}
	pixUseCase := usecase.PixUseCase{PixKeyRepository: pixRepository}
	pixGrpcService := NewPixGrpcService(pixUseCase)

	pb.RegisterPixServiceServer(grpcServer, pixGrpcService)

	reflection.Register(grpcServer)

	address := fmt.Sprintf("0.0.0.0:%d", port)
	listener, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatal("cannot start grpc server: ", err)
	}

	log.Printf("gRPC server has been started on port %d", port)
	err = grpcServer.Serve(listener)
	if err != nil {
		log.Fatal("cannot start grpc server: ", err)
	}
}
