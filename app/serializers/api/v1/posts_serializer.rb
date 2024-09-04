module Api
  module V1
    class PostsSerializer
      include FastJsonapi::ObjectSerializer
      attributes :id, :title, :description

    end
  end
end
