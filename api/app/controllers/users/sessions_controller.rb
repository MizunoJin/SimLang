class Users::SessionsController < Devise::RegistrationsController
  respond_to :json

  private
  def respond_with(_resource, _opts = {})
    render json: {
      message: 'You are logged in.',
      user: current_user
    }, status: :ok
  end

  def respond_to_on_destroy(resource, _opts = {})
    log_out_success && return if resource.persisted?

    log_out_failed
  end

  def log_out_success
    render json: {
      message: 'You are logged out successfully.',
      user: current_user
    }, status: ok
  end

  def log_out_failed
    render json: {
      message: 'Something went wrong.'
    }, status: :unauthorizied
  end
end
