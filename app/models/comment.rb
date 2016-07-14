class Comment < ActiveRecord::Base
  # Remember to create a migration!
  validates :comm , presence: true , confirmation: true
  validates :author , presence: true , confirmation: true
end
