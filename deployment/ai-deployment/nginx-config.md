# Nginx Configuration on a Linux Server

Use Nginx as a reverse proxy to serve the `ai` project.

## 1. Create a new file ai-bccs-club in the /etc/nginx/sites-available directory

```bash
$ sudo vim /etc/nginx/sites-available/ai-bccs-club
```

## 2. Add the following configuration

```conf
# /etc/nginx/sites-available/ai-bccs-club

# Define a server block.
server {
    # Listen on port 80 (default HTTP port).
    listen 80;

    # Define the domain name.
    server_name ai.bccs.club;

    # Define the location for the root URL
    location / {
        proxy_pass http://localhost:8091;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 3. Create a symbolic link to the file in the /etc/nginx/sites-enabled directory

```bash
$ sudo ln -s /etc/nginx/sites-available/ai-bccs-club /etc/nginx/sites-enabled/
```

## 4. Test the Nginx configuration
```bash
$ sudo nginx -t
```

## 5. Reload Nginx to apply the changes

```bash
$ sudo systemctl reload nginx
```

## 6. Configure HTTPS

- Use Cloudflare DNS proxy to enable HTTPS (it can also enable to hide the IP address of the server)
- Or: Configure Let's Encrypt (certbot) in Nginx to enable HTTPS
