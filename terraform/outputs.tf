output "public_ip" {
  value = aws_instance.portfolio_ec2.public_ip
}

output "alb_dns_name" {
  value = aws_lb.portfolio_alb.dns_name
}
