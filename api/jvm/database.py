from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

db_uri = 'postgresql://postgres:postgres@localhost:5432/jvm_db'
engine = create_engine(db_uri, convert_unicode=True, pool_size=20, max_overflow=0)
db_session = scoped_session(sessionmaker(autocommit=True,
                                         autoflush=True,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()
