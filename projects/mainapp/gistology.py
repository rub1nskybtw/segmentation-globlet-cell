import numpy as np
import pandas as pd
from PIL import Image
import os
import re
import cv2
import matplotlib.pyplot as plt
from keras.preprocessing import image
import skimage.io as io
import skimage.transform as trans
import tensorflow as tf
from keras.models import *
from keras.layers import *
from keras.callbacks import ModelCheckpoint, LearningRateScheduler, EarlyStopping
from keras import backend as keras
from keras import initializers
from keras import optimizers
import imutils
from .views import *



THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
images_folder = THIS_FOLDER + r"/media/test_img"
labels_folder = THIS_FOLDER + r"/media/test_gt"
filenames = [os.path.join(images_folder, file) for file in os.listdir(images_folder) if file.endswith(".jpg")]

def load_image(mode):
    if mode == "input":
        images_folder = THIS_FOLDER + r"/media/test_img"
        labels_folder = THIS_FOLDER + r"/media/test_gt"
        if not os.path.isdir(labels_folder):
            os.makedirs(labels_folder)

        filenames = [os.path.join(images_folder, file) for file in os.listdir(images_folder) if file.endswith(".jpg")]
        filenames2 = []
        images = []
        label_name = []
        height = []
        width = []
        for f in filenames:
            filenames2.append(f.replace("test_img", "test_gt"))
            img = Image.open(f)
            # Save the width and height of the image.
            width.append(img.size[0])
            height.append(img.size[1])
            # Resize images to 256x256.
            img = img.resize((256, 256), Image.ANTIALIAS)
            img = np.array(img, dtype=np.float32)
            # Normalize the images.
            img = img / 255.
            images.append(img)
        for f in filenames2:
            # Save the label_name for each test image.
            label_name.append(f)

        images = np.array(images)
        label_name = np.array(label_name)
        height = np.array(height)
        width = np.array(width)
        return images, label_name, height, width
    if mode == "output":
        images_folder = THIS_FOLDER + r"\media\test_img"
        labels_folder = THIS_FOLDER + r"\media\test_gt"
        if not os.path.isdir("output"):
            os.makedirs("output")
        filenames = [os.path.join(images_folder, file) for file in os.listdir(images_folder) if file.endswith(".jpg")]
        filenames2 = [os.path.join(labels_folder, file) for file in os.listdir(labels_folder) if file.endswith(".jpg")]

        filenames3 = []
        images = []
        label = []
        for f in filenames:
            filenames3.append(f.replace("test_img", "test_gt"))
            img = Image.open(f)
            img = np.array(img, dtype=np.float32)
            images.append(img)
        for f in filenames2:
            img2 = Image.open(f)
            img2 = np.array(img2, dtype=np.float32)
            label.append(img2)
        images = np.array(images)
        label = np.array(label)
        return images, label, filenames3


def predictor(file):
    file_name = THIS_FOLDER + r"/trained_model/trained_model_new4.h5"
    loaded_model = load_model(file_name)
    loaded_model.set_weights(loaded_model.get_weights())
    # Retrieve raw test images, label_name, height, and width.
    images, label_names, height, width = load_image(mode="input")
    for i in range(len(images)):
        img = images[i]
        # (height, width, channels) -> (1, height, width, channels)
        img = np.expand_dims(img, axis=0)
        prediction = loaded_model.predict(img, verbose=1)
        prediction = np.squeeze(prediction)
        # Generate binary mask by rounding up values.
        prediction = np.round(prediction)
        prediction = prediction * 255
        # Generate image.
        img = Image.fromarray(prediction)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        # Resize the image to original size.
        img = img.resize((width[i], height[i]), Image.ANTIALIAS)
        img.save(THIS_FOLDER + '/media/test_gt/' + file)
    label = []
    for i in range(1):
        img = Image.open(label_names[i])
        img = img.resize((256, 256), Image.ANTIALIAS)
        img = np.array(img, dtype=np.float32)
        img = img / 255
        label.append(img)
    lb_arr = label.copy()
    return lb_arr


def image_markup(file):
    images, labels, filenames = load_image(mode="output")
    mages, label_names, height, width = load_image(mode="input")
    for i in range(len(filenames)):
        imago = images[i]
        imago = imago.astype(np.uint8)
        imago = Image.fromarray(imago)
        imago = imago.resize((256, 256), Image.ANTIALIAS)
        imago = np.array(imago, dtype=np.float32)
        label = labels[i]
        label = label.astype(np.uint8)
        label = Image.fromarray(label)
        label = label.resize((256, 256), Image.ANTIALIAS)
        label = np.array(label, dtype=np.float32)
    img_gray = cv2.cvtColor(label, cv2.COLOR_BGR2GRAY);
    thresh_image = img_gray.astype(np.uint8)
    ret, bw_img = cv2.threshold(thresh_image, 0, 1, cv2.THRESH_BINARY)
    cnts = cv2.findContours(bw_img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    #imag = imag * 255
    for contour in cnts:
        cv2.drawContours(imago, [contour], -1, (0, 0, 81), 1)
    imag = np.array(imago)
    imag = np.array(Image.fromarray((imag).astype(np.uint8)).resize((width[0], height[0])).convert('RGB'))
    imag = imag.astype(np.uint8)
    imag = Image.fromarray(imag)
    #imag = imag.crop()
    imag.save(THIS_FOLDER + r'/media/segmentation/15.jpg')


