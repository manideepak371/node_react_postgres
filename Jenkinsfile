pipeline{
    agent any
    stages{
        stage('build backend image that also comes with UI'){
            steps{
                sh "docker build -t backend_with_ui:latest -f /server/Dockerfile ."
            }
        }

        stage('deploy'){
            steps{
                sh 'docker run -d -p 7000:7000 --name node_react_postgres backend_with_ui:latest'
            }
        }
    }
}
