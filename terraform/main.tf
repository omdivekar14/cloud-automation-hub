resource "aws_instance" "portfolio_ec2" {
  ami                    = "ami-0f5ee92e2d63afc18" # Ubuntu 22.04 (ap-south-1)
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.portfolio_sg.id]

  user_data = <<-EOF
              #!/bin/bash
              apt update -y

              # Install Docker
              apt install -y docker.io
              systemctl start docker
              systemctl enable docker
              usermod -aG docker ubuntu

              # Install Kubernetes tools
              apt install -y apt-transport-https curl
              curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
              echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" > /etc/apt/sources.list.d/kubernetes.list
              apt update -y
              apt install -y kubelet kubeadm kubectl
              apt-mark hold kubelet kubeadm kubectl
              EOF

  tags = {
    Name = "portfolio-devops-ec2"
  }
}
