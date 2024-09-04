class Api::V1::HomepageController < ApplicationController
  before_action :set_post, only: %i[update, destroy]

  def index
    @posts = Post.all

    render json: PostSerializer.new(@posts).serialized_json
  end

  def create
    post = Post.new

    if post.save
      render json: PostSerializer.new(post).serialized_json
    else
      render json: { error: post.errors.messages }, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: PostSerializer.new(@post).serialized_json
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
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :description)
  end
end
