@Library('pipeline') _

def version = '24.3200'

node (get_label()) {
    checkout_pipeline("rc-${version}")
    run_branch = load '/home/sbis/jenkins_pipeline/platforma/branch/run_branch'
    run_branch.execute('tailwindcss', version)
}