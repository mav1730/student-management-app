pipeline {
 
    agent any
 
    stages {
 
        stage('Checkout') {

            steps {

                echo 'Checking out source code...'

            }

        }
 
        stage('Install Dependencies') {

            steps {

                bat 'npm install'

            }

        }
 
        stage('Test') {

            steps {

                bat 'npm test'

            }

        }
 
        stage('Build') {

            steps {

                echo 'Building web application...'

            }

        }
 
        stage('Deploy') {

            steps {

                echo 'Deploying web application...'

            }

        }

    }
 
    post {

        success {

            echo 'CI/CD Pipeline completed successfully!'

        }
 
        failure {

            echo 'Pipeline failed!'

        }

    }

}
 
