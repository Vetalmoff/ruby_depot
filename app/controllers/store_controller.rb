class StoreController < ApplicationController
  skip_before_action :authorize
  include CurrentCart
  before_action :set_cart


  def index
    @products = Product.order(:title)
  end
end
def number_to_currency_E(number)
  number_to_currency(number, :unit => "грн", :separator => ",", :delimiter => " ", precision: 2, format: "%n %u")
end

