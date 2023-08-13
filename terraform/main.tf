resource "aws_s3_bucket" "mybucket" {
  bucket = var.bucketname

}

resource "aws_s3_bucket_ownership_controls" "example" {
  bucket = aws_s3_bucket.mybucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.mybucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "example" {
  depends_on = [
    aws_s3_bucket_ownership_controls.example,
    aws_s3_bucket_public_access_block.example,
  ]

  bucket = aws_s3_bucket.mybucket.id
  acl    = "public-read"
}


# testing path
resource "aws_s3_object" "style" {
  bucket       = aws_s3_bucket.mybucket.id
  for_each = fileset("/Users/nishantpansuriya/learn_aws_cicd/react-personal-portfolio-website/build/", "**")
  key = each.value
  source = "/Users/nishantpansuriya/learn_aws_cicd/react-personal-portfolio-website/build/${each.value}"

  depends_on   = [aws_s3_bucket_acl.example]

}



resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.mybucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }

  depends_on = [aws_s3_bucket_acl.example]
}


resource "aws_s3_bucket_cors_configuration" "example" {
  bucket = aws_s3_bucket.mybucket.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
    max_age_seconds = 3000
  }
}
