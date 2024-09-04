module Api
  module V1
    class HomepageController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :set_post, only: %i[update destroy]

      def index
        @posts = Post.all

        render json: Api::V1::PostSerializer.new(@posts).serializable_hash
      end

      def create
        post = Post.new(post_params)

        if post.save
          render json: Api::V1::PostSerializer.new(post).serializable_hash
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      def update
        render json: @post
        # if @post.update(post_params)
        #   render json: Api::V1::PostSerializer.new(@post).serializable_hash
        # else
        #   render json: { error: @post.errors.messages }, status: 422
        # end
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
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :description)
      end
    end
  end
end
