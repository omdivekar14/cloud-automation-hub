resource "aws_lb_listener" "portfolio_listener" {
  load_balancer_arn = aws_lb.portfolio_alb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.portfolio_tg.arn
  }
}
