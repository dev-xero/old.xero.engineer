---
title: "Auth basics: building a jwt/password auth system in Go"
description: "Authentication, so many ways to implement, and this is just another."
banner: "/banners/04.jpeg"
date: "2024-03-18"
tags:
    - Programming
    - Guide
slug: "auth-basics-building-a-simple-password-auth-server-in-go"
---

# Auth Basics: Building a JWT Password Authentication System in Go

```go
func initDatabaseConnection() (*sql.DB, error) {
	db, err := database.ConnectDatabase()
	if err != nil {
		msg := "[FAIL]: unable to connect database"
		return nil, fmt.Errorf("%s: %w", msg, err)
	}

	return db, nil
}
```