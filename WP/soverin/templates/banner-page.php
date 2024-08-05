<?php

$image = get_field('image_help', 'options');
$title = get_field('title_help', 'options');
$text = get_field('text_help', 'options');

?>

<section class="banner-help">
    <div class="content-width">
        <div class="content">
            <?php if($image):?>
                <div class="bg">
                    <img src="<?= $image['url'];?>" alt="<?= $image['alt'];?>">
                </div>
            <?php endif;?>

            <div class="wrap">

                <?= $title?'<h1>'.$title.'</h1>':'';?>

                <?= $text?$text:'';?>

            </div>
        </div>
    </div>
</section>
