class ProductionConfig:
  ENV = 'production'
  DEBUG = False
  SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@localhost:5432/jvm_db"
  SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig:
  ENV = 'development'
  DEBUG = True
  SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@localhost:5432/jvm_db"
  SQLALCHEMY_TRACK_MODIFICATIONS = True