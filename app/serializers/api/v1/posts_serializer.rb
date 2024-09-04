module Api
  module V1
    class PostsSerializer
      include FastJsonapi::ObjectSerializer
      attributes :title, :description

    end
  end
end
