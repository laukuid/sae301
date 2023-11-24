<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RenduController extends AbstractController
{
    #[Route('/rendu', name: 'app_rendu')]
    public function index(): Response
    {
        return $this->render('rendu/index.html.twig', [
            'page' => 'Rendu',
        ]);
    }
}
