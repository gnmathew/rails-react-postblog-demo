module Api
  module V1
    class PostsController < AuthController
      protect_from_forgery with: :null_session
      before_action :set_post, only: %i[update destroy]

      def index
        @posts = @current_user.posts.all

        render json: Api::V1::PostsSerializer.new(@posts).serializable_hash
      end

      def create
        post = @current_user.posts.build(post_params)

        if post.save
          render json: Api::V1::PostsSerializer.new(post).serializable_hash
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      def update

        if @post.update(post_params)
          render json: Api::V1::PostsSerializer.new(@post).serializable_hash
        else
          render json: { error: @post.errors.messages }, status: 422
        end
      end

      def destroy
        if @post.destroy
          head :no_content
        else
          render json: { error: @post.errors.messages }, status: 422
        end
      end

      private

      def set_post
        @post = @current_user.posts.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :description)
      end
    end
  end
end