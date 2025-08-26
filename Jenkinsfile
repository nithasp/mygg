pipeline{
    agent none
    options{skipDefaultCheckout()}
    environment{
        dir_deploy = '/server/container/mygg_app'
    }
    stages{
        stage('Preview'){
            agent{label 'YGG-DPT'}
            when{
                branch 'dev'
            }
            steps{
                dir("${dir_deploy}"){
                    checkout scm
                    sh './setup.sh'
                }
            }
        }
    }
}