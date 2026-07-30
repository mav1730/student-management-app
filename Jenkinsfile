pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Validate Files') {
            steps {
                echo 'Validating project files...'
                bat '''
                    if not exist index.html (
                        echo ERROR: index.html not found
                        exit /b 1
                    )
                    if not exist script.js (
                        echo ERROR: script.js not found
                        exit /b 1
                    )
                    if not exist style.css (
                        echo ERROR: style.css not found
                        exit /b 1
                    )
                    echo All required files are present.
                '''
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat '''
                    if exist dist rmdir /s /q dist
                    mkdir dist
                    copy index.html dist\\
                    copy script.js dist\\
                    copy style.css dist\\
                    echo Build completed successfully. Files copied to dist folder.
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic tests...'
                bat '''
                    if not exist dist\\index.html (
                        echo ERROR: Build failed - index.html missing in dist
                        exit /b 1
                    )
                    echo Tests passed.
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat '''
                    echo Application is ready in the dist folder.
                    dir dist
                '''
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
 
