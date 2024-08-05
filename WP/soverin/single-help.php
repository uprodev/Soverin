<?php

get_header();

$cats = get_the_terms(get_the_ID(), 'category_help');
$terms = get_terms(['taxonomy' => 'category_help', 'hide_empty' => false]);
$ids = $cats[0]->term_id;

$content = wpautop(get_the_content());

get_template_part('templates/banner-page');

?>

    <section class="help pt-20">
        <div class="content-width">
            <div class="content">
                <div class="help-menu">
                    <?php if($terms):?>
                        <ul>
                            <?php foreach ($terms as $term):
                                $img = get_field('icon', 'category_help_'.$term->term_id);
                                ?>
                                <li<?= $ids==$term->term_id?' class="current"':'';?>><a href="<?= get_term_link($term->term_id);?>"><?= $img?'<img src="'.$img['url'].'" alt="'.$term->name.'">':'';?><?= $term->name;?></a></li>
                            <?php endforeach;?>
                        </ul>
                    <?php endif;?>
                </div>

                <div class="help-content">
                    <div class="account">
                        <div class="title">

                            <?php get_template_part('templates/breadcrumbs');?>

                            <h2><?php the_title();?></h2>

                        </div>

                        <?php if($content):?>
                            <div class="default-text">

                                <?= $content;?>

                                <div class="btn-wrap">
                                    <a href="<?= get_term_link($ids);?>" class="btn-default"><?= __('Go back', 'soverin');?></a>
                                </div>
                            </div>
                        <?php endif;?>

                    </div>
                </div>
            </div>
        </div>
    </section>

<?php get_footer();
