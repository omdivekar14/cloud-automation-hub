pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t portfolio:latest .
                '''
            }
        }

        stage('Import Image into containerd') {
            steps {
                sh '''
                docker save portfolio:latest -o portfolio.tar
                sudo ctr -n k8s.io images import portfolio.tar
                '''
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
            echo '✅ CI/CD pipeline completed successfully'
        }
        failure {
            echo '❌ CI/CD pipeline failed'
        }
    }
}

