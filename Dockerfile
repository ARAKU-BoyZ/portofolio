#Step 1. Build aplikasi react
FROM node:20-alpine

#Step 2. Menentukan working directory di dalem container
WORKDIR /app

#Step 3. Menyalin file package.json sama package-lock.json untuk di instalasi depedency
COPY package.json package-lock.json /app/

#Step 4. Menginstall depedency
RUN npm install

#Step 5. Menyalin semua file dari project local di dalam container
COPY . .

#Step 6. Build aplikasi
RUN npm run build

#Step 7. Gunakan Nginx sebagai server
FROM nginx:alpine

#Step 8. Mengcopy hasil build aplikasi dari stage sebelumnya ke folder nginx
COPY --from=build /app/dist /usr/share/nginx/html

#Step 9. Tentukan port 80
EXPOSE 80

#Step 10. Menjalankan server nginx
CMD [ "nginx", "-g", "daemon off;"]