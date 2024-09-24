module Api
  module V1
    class RegistrationsController < AuthController
      skip_before_action :authorize_request, only: :create

      def create
        user = User.new(user_params)

        if user.save
          token = jwt_encode(user_id: user.id)
          render json: {token: token, user: user}, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
      end
    end
  end
end