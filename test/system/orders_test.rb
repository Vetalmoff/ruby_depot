require "application_system_test_case"

class OrdersTest < ApplicationSystemTestCase
  test "check routing number" do
    visit store_index_url

    first('.catalog li').click_on 'Add to Cart'

    click_on 'Checkout'

    fill_in 'order_name', with: 'Dave Thomas'
    fill_in 'order_address', with: '123 Main Street'
    fill_in 'order_email', with: 'dave@example.com'

    assert_no_selector "#order_routing_number"

    select 'Check', from: 'pay_type'
    assert_selector "#order_routing_number"
    assert_selector "#order_account_number"

    select 'Credit card', from: 'pay_type'
    assert_selector '#order_credit_card_number'
    assert_selector '#order_experation_date'

    select 'Purchase order', from: 'pay_type'
    assert_selector '#order_po_number'

  end

  # test "Add to Cart" do
  #   visit store_index_url
  #
  #   first('.catalog li').click_on 'Add to Cart'
  #
  #   assert

  end
