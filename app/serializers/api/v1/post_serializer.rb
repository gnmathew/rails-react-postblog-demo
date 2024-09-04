module Api
  module V1
    class PostSerializer
      include FastJsonapi::ObjectSerializer
      attributes :title, :description

    end
  end
end
