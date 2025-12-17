# ☁️ Cloud Automation Hub

A comprehensive cloud automation solution leveraging Infrastructure as Code (IaC) with Terraform, containerization with Docker, and CI/CD automation with Jenkins to deploy applications on AWS EKS.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Infrastructure Deployment](#infrastructure-deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Screenshots](#screenshots)
- [Cleanup](#cleanup)
- [Contributing](#contributing)

## 🎯 Overview

Cloud Automation Hub is an end-to-end DevOps project that demonstrates modern cloud-native application deployment practices. The project automates the provisioning of AWS infrastructure, builds and deploys containerized applications to Kubernetes (EKS), and manages the entire lifecycle through Jenkins pipelines.

### Key Features

- 🏗️ **Infrastructure as Code**: Automated AWS resource provisioning with Terraform
- 🐳 **Containerization**: Docker-based application packaging
- ☸️ **Kubernetes Orchestration**: Deployment to AWS EKS cluster
- 🔄 **CI/CD Automation**: Jenkins pipeline for continuous integration and deployment
- 🌐 **Load Balancing**: Application Load Balancer with Target Groups
- 🔒 **Security**: VPC with public/private subnets, security groups, and IAM roles

## 🏛️ Architecture

```
┌─────────────┐
│   GitHub    │
│  Repository │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Jenkins   │
│   Server    │
└──────┬──────┘
       │
       ├──────────────┐
       ▼              ▼
┌─────────────┐  ┌──────────────┐
│  Terraform  │  │    Docker    │
│   Deploy    │  │    Build     │
└──────┬──────┘  └──────┬───────┘
       │                │
       ▼                ▼
┌─────────────────────────────┐
│         AWS Cloud           │
│  ┌────────────────────────┐ │
│  │  VPC & Networking      │ │
│  │  ├─ Public Subnets     │ │
│  │  └─ Private Subnets    │ │
│  └────────────────────────┘ │
│  ┌────────────────────────┐ │
│  │  EKS Cluster           │ │
│  │  ├─ Worker Nodes       │ │
│  │  ├─ Pods               │ │
│  │  └─ Services           │ │
│  └────────────────────────┘ │
│  ┌────────────────────────┐ │
│  │  Application LB        │ │
│  │  └─ Target Groups      │ │
│  └────────────────────────┘ │
│  ┌────────────────────────┐ │
│  │  EC2 Instances         │ │
│  └────────────────────────┘ │
└─────────────────────────────┘
```

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, TypeScript, Vite, TailwindCSS |
| **Infrastructure** | Terraform, AWS (VPC, EKS, EC2, ALB) |
| **Containerization** | Docker |
| **Orchestration** | Kubernetes (AWS EKS) |
| **CI/CD** | Jenkins |
| **Cloud Provider** | AWS |

## ✅ Prerequisites

Before you begin, ensure you have the following installed and configured:

- **AWS CLI** (v2.x or later) - [Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- **Terraform** (v1.0 or later) - [Installation Guide](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
- **kubectl** - [Installation Guide](https://kubernetes.io/docs/tasks/tools/)
- **Docker** - [Installation Guide](https://docs.docker.com/get-docker/)
- **Jenkins** (v2.x or later) - [Installation Guide](https://www.jenkins.io/doc/book/installing/)
- **AWS Account** with appropriate permissions
- **GitHub Account**

### AWS Credentials Configuration

```bash
aws configure
# AWS Access Key ID: YOUR_ACCESS_KEY
# AWS Secret Access Key: YOUR_SECRET_KEY
# Default region name: us-east-1
# Default output format: json
```

## 📁 Project Structure

```
cloud-automation-hub/
├── terraform/                 # Infrastructure as Code
│   ├── main.tf               # Main Terraform configuration
│   ├── variables.tf          # Variable definitions
│   ├── outputs.tf            # Output definitions
│   └── terraform.tfvars      # Variable values
├── src/                      # React application source
│   ├── components/           # React components
│   ├── App.tsx               # Main app component
│   └── main.tsx              # Entry point
├── public/                   # Static assets
├── Dockerfile                # Docker container definition
├── Jenkinsfile              # CI/CD pipeline definition
├── package.json             # Node.js dependencies
└── README.md                # Project documentation
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/omdivekar14/cloud-automation-hub.git
cd cloud-automation-hub
```

### 2. Install Dependencies

```bash
npm install
# or
bun install
```

### 3. Local Development

```bash
npm run dev
# Application will be available at http://localhost:5173
```

## 🏗️ Infrastructure Deployment

### Step 1: Initialize Terraform

Navigate to the terraform directory and initialize:

```bash
cd terraform
terraform init
```

### Step 2: Review Infrastructure Plan

```bash
terraform plan
```

This will show you all the resources that will be created:
- VPC with public and private subnets
- Internet Gateway and NAT Gateways
- EKS Cluster with worker nodes
- EC2 instances
- Application Load Balancer
- Target Groups
- Security Groups
- IAM Roles and Policies

### Step 3: Apply Terraform Configuration

```bash
terraform apply
# Type 'yes' when prompted
```

**Deployment time:** Approximately 15-20 minutes

### Step 4: Configure kubectl

After the EKS cluster is created, configure kubectl to interact with it:

```bash
aws eks update-kubeconfig --name <your-cluster-name> --region us-east-1
```

### Step 5: Verify Cluster Access

```bash
kubectl get nodes
kubectl get namespaces
```

## 🔄 CI/CD Pipeline

The Jenkins pipeline automates the entire build and deployment process.

### Pipeline Stages

1. **Checkout**: Clones the repository from GitHub
2. **Build**: Compiles the React application
3. **Test**: Runs unit and integration tests
4. **Docker Build**: Creates Docker image
5. **Docker Push**: Pushes image to container registry
6. **Deploy to EKS**: Updates Kubernetes deployments
7. **Verify Deployment**: Checks pod and service status

### Setting Up Jenkins Pipeline

1. Create a new Pipeline job in Jenkins
2. Configure GitHub repository URL
3. Set Jenkinsfile path: `Jenkinsfile`
4. Configure AWS credentials in Jenkins
5. Add DockerHub credentials (if using DockerHub)
6. Run the pipeline

### Jenkins Configuration Requirements

Add the following credentials in Jenkins:
- `aws-credentials`: AWS access key and secret key
- `dockerhub-credentials`: Docker registry credentials
- `github-token`: GitHub personal access token

## 📸 Screenshots

### 1. Deployed Application - Portfolio Website

![Portfolio Website] <img width="1895" height="861" alt="Screenshot 2025-12-17 065845" src="https://github.com/user-attachments/assets/761b13de-27a6-422a-8abe-349018397160" />


**Live Application:** The React-based portfolio application successfully deployed and running on AWS infrastructure. This demonstrates the complete CI/CD pipeline from code to production.

**Features Visible:**
- ✅ Responsive design with modern UI
- ✅ Professional portfolio layout
- ✅ Cloud & DevOps Engineer profile
- ✅ Skills showcase (AWS, Azure, Docker, Terraform, CI/CD)
- ✅ Contact information and social links

---

### 2. AWS EC2 Instance - Running

![EC2 Instance] <img width="1892" height="425" alt="Screenshot 2025-12-17 062257" src="https://github.com/user-attachments/assets/0a6b366a-388d-4ab8-a8b9-732f0d78534d" />


**Instance Details:**
- **Instance Name:** portfolio-devo...
- **Instance ID:** i-090ce6d2bffe44113
- **Instance State:** ✅ Running
- **Instance Type:** t3.small
- **Availability Zone:** ap-south-1b
- **Status Checks:** 3/3 checks passed
- **Public IPv4:** ec2-3-7-73-...

This EC2 instance serves as the worker node for the application deployment.

---

### 3. Target Group - Healthy Status

![Target Group] <img width="1919" height="801" alt="Screenshot 2025-12-17 062338" src="https://github.com/user-attachments/assets/735b0aa5-95a6-4f34-9348-ea5908f2bda2" />


**Target Group Configuration:**
- **Name:** portfolio-tg
- **ARN:** arn:aws:elasticloadbalancing:ap-south-1:439638384662:targetgroup/portfolio-tg/4b3127430c551507
- **Target Type:** Instance
- **Protocol:** HTTP:30007
- **Protocol Version:** HTTP1
- **VPC:** vpc-041b4ad3a69970811
- **Load Balancer:** portfolio-alb

**Health Status:**
- ✅ **1 Healthy Target**
- ❌ 0 Unhealthy
- ⚪ 0 Unused
- ⚪ 0 Initial
- ⚪ 0 Draining

The target group successfully routes traffic to the healthy EC2 instance.

---

### 4. Terraform Outputs - Infrastructure Details

![Terraform Outputs] <img width="862" height="102" alt="Screenshot 2025-12-17 063048" src="https://github.com/user-attachments/assets/28d15c5d-3d6f-47e5-9377-d694956d73e8" />


**Key Outputs:**
```bash
alb_dns_name = "portfolio-alb-763822568.ap-south-1.elb.amazonaws.com"
public_ip = "3.7.73.224"
```

These outputs provide the critical endpoints for accessing the deployed application:
- **ALB DNS:** Load balancer endpoint for high availability
- **Public IP:** Direct EC2 instance access

---

### 5. Kubernetes Resources - Pods & Services

![Kubernetes Pods and Services] <img width="1060" height="238" alt="Screenshot 2025-12-17 090150" src="https://github.com/user-attachments/assets/ce919deb-ecfe-450e-b184-dbcaed3ba8d8" />


**Pods Status:**
```bash
$ kubectl get pods
NAME                                      READY   STATUS    RESTARTS   AGE
portfolio-deployment-7f8df95985-p6ndr    1/1     Running   0          7m20s
portfolio-deployment-7f8df95985-wptdv    1/1     Running   0          7m20s
```

**Services Configuration:**
```bash
$ kubectl get svc
NAME                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)         AGE
kubernetes           ClusterIP   10.96.0.1        <none>        443/TCP         18m
portfolio-service    NodePort    10.105.153.0     <none>        80:30007/TCP    17m
```

**Key Observations:**
- ✅ **2 Pods Running:** High availability with multiple replicas
- ✅ **NodePort Service:** Exposes application on port 30007
- ✅ **Zero Restarts:** Stable deployment
- ✅ **All Pods Ready:** 1/1 containers running in each pod

---

### 6. Jenkins Pipeline - Successful Execution

![Jenkins Pipeline Success] <img width="1898" height="865" alt="Screenshot 2025-12-17 062225" src="https://github.com/user-attachments/assets/869210fd-1398-4417-b43d-5ba59dcfb293" />


**Pipeline Overview:**
- **Build Number:** #13
- **Status:** ✅ SUCCESS
- **Duration:** 21 seconds (Queued: 4ms)
- **Triggered By:** omdivekar (Manual run)
- **Started:** 7 min 20 sec ago

**Pipeline Stages (All Passed):**
1. ✅ **Checkout SCM** - 2.6s
2. ✅ **Build Docker Image** - 13s  
3. ✅ **Deploy to Kubernetes** - 0.84s
4. ✅ **Post Actions** - 0.1s

**Console Output:**
```
✅ CI/CD pipeline SUCCESS
```

The Jenkins pipeline successfully automated the entire deployment workflow from code checkout to Kubernetes deployment.

---

### 7. Terraform Destroy - Clean Infrastructure Teardown

![Terraform Destroy] <img width="1441" height="337" alt="Screenshot 2025-12-17 072521" src="https://github.com/user-attachments/assets/0f4a681a-d25f-4eed-8110-f41be2f5adac" />


**Destruction Summary:**
```bash
aws_lb_target_group.portfolio_tg: Destruction complete after 0s
aws_instance.portfolio_ec2: Still destroying... [id=i-090ce6d2bffe44113, 00m10s elapsed]
aws_lb.portfolio_alb: Still destroying... [id=arn:aws:elasticloadbalancing:ap-south-1...cer/app/portfolio-alb/bb34a8b0f0c098dc, 00m10s elapsed]
aws_lb.portfolio_alb: Destruction complete after 16s
aws_security_group.alb_sg: Destroying... [id=sg-0b10237c5dd62c31e]
aws_security_group.alb_sg: Destruction complete after 1s
aws_instance.portfolio_ec2: Still destroying... [id=i-090ce6d2bffe44113, 00m20s elapsed]
aws_instance.portfolio_ec2: Still destroying... [id=i-090ce6d2bffe44113, 00m30s elapsed]
aws_instance.portfolio_ec2: Destruction complete after 40s
aws_security_group.portfolio_sg: Destroying... [id=sg-01864d770373a8ee6]
aws_security_group.portfolio_sg: Destruction complete after 0s

✅ Destroy complete! Resources: 7 destroyed.
```

**Resources Successfully Destroyed:**
- ✅ Target Group (portfolio_tg)
- ✅ EC2 Instance (i-090ce6d2bffe44113)
- ✅ Application Load Balancer (portfolio_alb)
- ✅ Security Groups (alb_sg, portfolio_sg)
- ✅ All associated networking components

**Total:** 7 AWS resources cleanly removed, ensuring no residual costs.

---

## 📊 Infrastructure Summary

Based on the screenshots above, here's what was successfully deployed:

| Component | Details | Status |
|-----------|---------|--------|
| **EC2 Instance** | t3.small (ap-south-1b) | ✅ Running |
| **Load Balancer** | Application LB with DNS | ✅ Active |
| **Target Group** | HTTP:30007 with 1 healthy target | ✅ Healthy |
| **Kubernetes Pods** | 2 replicas running | ✅ Running |
| **Kubernetes Service** | NodePort on 30007 | ✅ Active |
| **Jenkins Pipeline** | 4 stages completed | ✅ Success |
| **Application** | Portfolio website live | ✅ Deployed |

## 🧹 Cleanup

To destroy all created infrastructure and avoid AWS charges:

### Using Terraform

```bash
cd terraform
terraform destroy
# Type 'yes' when prompted
```

**Important:** This will permanently delete:
- EKS Cluster and all running pods
- EC2 Instances
- Load Balancers and Target Groups
- VPC and all networking components
- Security Groups
- IAM Roles

### Manual Verification

After running destroy, verify in AWS Console:
1. EC2 Dashboard - Check for any remaining instances
2. EKS - Ensure cluster is deleted
3. VPC - Verify VPC and subnets are removed
4. Load Balancers - Confirm all LBs are deleted

## 🔒 Security Best Practices

- ✅ Use IAM roles with least privilege principle
- ✅ Enable VPC flow logs for network monitoring
- ✅ Implement security groups with restrictive rules
- ✅ Use private subnets for application workloads
- ✅ Enable EKS audit logging
- ✅ Store sensitive credentials in AWS Secrets Manager
- ✅ Enable AWS CloudTrail for audit trails
- ✅ Use HTTPS/TLS for all external communications

## 🐛 Troubleshooting

### Common Issues

**Issue: EKS cluster creation timeout**
```bash
# Increase timeout in Terraform configuration
resource "aws_eks_cluster" "main" {
  ...
  timeouts {
    create = "30m"
    delete = "30m"
  }
}
```

**Issue: kubectl unable to connect**
```bash
# Reconfigure kubectl
aws eks update-kubeconfig --name <cluster-name> --region us-east-1

# Verify AWS credentials
aws sts get-caller-identity
```

**Issue: Pods in Pending state**
```bash
# Check node status
kubectl get nodes

# Describe pod for more details
kubectl describe pod <pod-name>

# Check events
kubectl get events --sort-by=.metadata.creationTimestamp
```

## 📚 Additional Resources

- [Terraform AWS Provider Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [AWS EKS Best Practices Guide](https://aws.github.io/aws-eks-best-practices/)
- [Kubernetes Documentation](https://kubernetes.io/docs/home/)
- [Jenkins Pipeline Documentation](https://www.jenkins.io/doc/book/pipeline/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Om Divekar**

- GitHub: [@omdivekar14](https://github.com/omdivekar14)
- LinkedIn: [Connect with me](https://linkedin.com/in/omdivekar14)

## 🙏 Acknowledgments

- AWS for comprehensive cloud services
- HashiCorp for Terraform
- The Kubernetes community
- Jenkins and the CI/CD community
- React and TypeScript communities

## 📊 Project Status

🟢 **Active Development** - This project is actively maintained and updated regularly.

---



