class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |c|
      c.string :comm
      c.string :author
      c.timestamp
    end
  end
end
