pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/omdivekar14/cloud-automation-hub.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t portfolio:latest -f docker/Dockerfile .
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
            echo '✅ Deployment completed successfully'
        }
        failure {
            echo '❌ Deployment failed'
        }
    }
}
