pipeline{
    agent any
    environment {
        IMAGE_NAME = "manideepak371/backend_with_ui"
        TAG = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('build backend image that also comes with UI'){
            steps{
                sh "docker build -t $IMAGE_NAME:$TAG -f /server/Dockerfile ."
            }
        }

        stage('login to docker hub'){
            
        }

        stage('push image to docker hub'){

        }

        // stage('deploy'){
        //     steps{
        //         sh 'docker run -d -p 7000:7000 --name node_react_postgres backend_with_ui:latest'
        //     }
        // }
    }
}
