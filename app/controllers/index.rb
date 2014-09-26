get '/' do
	erb :login
end

post '/gravatars' do
  session[:email1] = params[:email1]
  session[:email2] = params[:email2]
  erb :index
end

