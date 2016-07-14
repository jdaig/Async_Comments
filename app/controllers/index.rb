get '/' do
  @comment_all = Comment.all
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  erb :index
end

post '/' do
  # Al hacer el redireccionamiento al metodo post desde el js
  # se tiene que los manda mediante el hash params
  # p params[:comm]
  comment = Comment.create(comm: params[:comm], author: params[:author])
  redirect to '/view_comms'
end

get '/view_comms' do
  @comment_all = Comment.all
  erb :index
end