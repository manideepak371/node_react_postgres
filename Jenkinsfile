pipeline{
    agent any
    environment {
        IMAGE_NAME = "manideepak371/backend_with_ui"
        TAG = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('build backend image that also comes with UI'){
            steps{
                sh "docker build -t $IMAGE_NAME:$TAG -f server/Dockerfile ."
            }
        }

        stage('login to docker hub'){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: 'docker_hub_dev',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    """
                }
            }
        }

        stage('push image to docker hub'){
            steps{
                sh """
                docker push $IMAGE_NAME:$TAG
                """
            }
        }

        // stage('deploy'){
        //     steps{
        //         sh 'docker run -d -p 7000:7000 --name node_react_postgres backend_with_ui:latest'
        //     }
        // }
    }
}
