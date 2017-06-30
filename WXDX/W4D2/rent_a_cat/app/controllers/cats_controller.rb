class CatsController < ApplicationController
  def index
    @cats = Cat.all
    # render json: cats
    render :index
  end

  def show
    @cat = Cat.find_by(id: params[:id])
    # render json: cats
    if @cat
      render :show
    else
      redirect_to cats_url
    end
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    # render json: "creating cat"
    @cat = Cat.new(cat_params)
    if @cat.save
      redirect_to cat_url(@cat)
    else
      render :new
    end
  end

  def edit
    @cat = Cat.find_by(id: params[:id])
    render :edit
  end

  def update
    @cat = Cat.find_by(id: params[:id])
    if @cat.update_attributes(cat_params)
        redirect_to cat_url(@cat)
    else
      render :edit
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :color, :sex, :description, :birth_date)
  end
end
