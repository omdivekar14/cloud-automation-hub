resource "aws_lb_target_group_attachment" "portfolio_attach" {
  target_group_arn = aws_lb_target_group.portfolio_tg.arn
  target_id        = aws_instance.portfolio_ec2.id
  port             = 30007
}
