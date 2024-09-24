module Api
  module V1
    class SessionsController < AuthController
      skip_before_action :authorize_request, only: :create

      def create
        user = User.find_by(email: user_params[:email])

        if user&.authenticate(user_params[:password])
          token = jwt_encode(user_id: user.id)
          render json: { token: token, user: user }, status: :ok
        else
          render json: { errors: 'Invalid email or password' }, status: :unauthorized
        end
      end

      private

      def user_params
        params.require(:user).permit(:username, :email, :password)
      end
    end
  end
end