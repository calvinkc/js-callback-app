Rails.application.routes.draw do
  get '/' => "pages#home" # Not restful, its okay - no models. 
end
