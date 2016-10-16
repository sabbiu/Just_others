I = imread('image1.jpg');
I = rgb2gray(I);
% figure,
% imshow(I);
% max = 0;
% min = 255;

count = zeros(256,1);
% count
for i=1:size(I,1)
    for j=1:size(I,2)
        
        count(I(i,j)+1,1)=count(I(i,j)+1,1)+1;
        if(I(i,j)<100)
            I(i,j) =255;
        else
            I(i,j) = 0;
        end
%         if I(i,j)>max
%             max = I(i,j);
%         end
%         if I(i,j)<min
%             min = I(i,j);
%         end
    end
end

% figure,
% % bar(255,count)
% bar(count);

figure,
imshow(I);

