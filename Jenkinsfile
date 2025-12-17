pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio:latest .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl delete pods -l app=portfolio || true
                '''
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD pipeline SUCCESS'
        }
        failure {
            echo '❌ CI/CD pipeline FAILED'
        }
    }
}

