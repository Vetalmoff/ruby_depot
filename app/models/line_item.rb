class LineItem < ApplicationRecord
  belongs_to :order, optional: true
  belongs_to :product, optional: true
  belongs_to :cart

  def decrement_or_destroy
    if quantity > 1
      decrement(:quantity)
      save
    else
      destroy
    end
  end

  def total_price
    product.price * quantity
  end
end
